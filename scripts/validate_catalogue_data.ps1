param(
    [string]$CanonicalDataPath = "data/repositories.json",
    [string]$EnrichedDataPath = "data/repositories.enriched.json"
)

$ErrorActionPreference = "Stop"

function Assert-NonEmptyString {
    param(
        [Parameter(Mandatory = $true)][AllowNull()][object]$Value,
        [Parameter(Mandatory = $true)][string]$FieldName
    )

    if ($null -eq $Value -or [string]::IsNullOrWhiteSpace([string]$Value)) {
        throw "Field '$FieldName' must be a non-empty string."
    }
}

function Assert-AllowedValue {
    param(
        [Parameter(Mandatory = $true)][AllowNull()][object]$Value,
        [Parameter(Mandatory = $true)][string[]]$AllowedValues,
        [Parameter(Mandatory = $true)][string]$FieldName
    )

    if ($AllowedValues -notcontains [string]$Value) {
        throw "Field '$FieldName' has unsupported value '$Value'."
    }
}

function Assert-OptionalStringArray {
    param(
        [AllowNull()][object]$Value,
        [Parameter(Mandatory = $true)][string]$FieldName
    )

    if ($null -eq $Value) {
        return
    }

    foreach ($item in $Value) {
        Assert-NonEmptyString -Value $item -FieldName $FieldName
    }
}

function Assert-DateTimeOrNull {
    param(
        [AllowNull()][object]$Value,
        [Parameter(Mandatory = $true)][string]$FieldName
    )

    if ($null -eq $Value) {
        return
    }

    $parsed = [DateTime]::MinValue

    if (-not [DateTime]::TryParse(
            [string]$Value,
            [System.Globalization.CultureInfo]::InvariantCulture,
            [System.Globalization.DateTimeStyles]::RoundtripKind,
            [ref]$parsed
        )) {
        throw "Field '$FieldName' must be a valid date-time string or null."
    }
}

function Assert-CanonicalEntry {
    param(
        [Parameter(Mandatory = $true)][pscustomobject]$Entry,
        [Parameter(Mandatory = $true)][string[]]$AllowedCategories,
        [Parameter(Mandatory = $true)][string[]]$AllowedStatuses
    )

    Assert-NonEmptyString -Value $Entry.name -FieldName "name"
    Assert-NonEmptyString -Value $Entry.url -FieldName "url"
    Assert-NonEmptyString -Value $Entry.description -FieldName "description"
    Assert-NonEmptyString -Value $Entry.language -FieldName "language"
    Assert-NonEmptyString -Value $Entry.license -FieldName "license"
    Assert-NonEmptyString -Value $Entry.madagascar_relevance -FieldName "madagascar_relevance"
    Assert-AllowedValue -Value $Entry.category -AllowedValues $AllowedCategories -FieldName "category"
    Assert-AllowedValue -Value $Entry.status -AllowedValues $AllowedStatuses -FieldName "status"

    if ([string]$Entry.url -notmatch '^https?://') {
        throw "Field 'url' must start with http:// or https://."
    }

    if ($null -ne $Entry.additional_categories) {
        $uniqueCategories = New-Object System.Collections.Generic.HashSet[string]

        foreach ($category in $Entry.additional_categories) {
            Assert-AllowedValue -Value $category -AllowedValues $AllowedCategories -FieldName "additional_categories"

            if (-not $uniqueCategories.Add([string]$category)) {
                throw "Duplicate value '$category' found in additional_categories."
            }
        }
    }

    Assert-OptionalStringArray -Value $Entry.target_users -FieldName "target_users"
    Assert-OptionalStringArray -Value $Entry.tags -FieldName "tags"
}

function Assert-EnrichedEntry {
    param(
        [Parameter(Mandatory = $true)][pscustomobject]$Entry,
        [Parameter(Mandatory = $true)][string[]]$AllowedCategories,
        [Parameter(Mandatory = $true)][string[]]$AllowedStatuses
    )

    Assert-CanonicalEntry -Entry $Entry -AllowedCategories $AllowedCategories -AllowedStatuses $AllowedStatuses
    Assert-NonEmptyString -Value $Entry.slug -FieldName "slug"
    Assert-NonEmptyString -Value $Entry.github_owner -FieldName "github_owner"
    Assert-NonEmptyString -Value $Entry.github_repo -FieldName "github_repo"
    Assert-NonEmptyString -Value $Entry.repository_path -FieldName "repository_path"
    Assert-DateTimeOrNull -Value $Entry.last_updated -FieldName "last_updated"

    if ([string]$Entry.repository_path -notmatch '^[^/]+/[^/]+$') {
        throw "Field 'repository_path' must match owner/repo."
    }

    if ([int]$Entry.stars -lt 0 -or [int]$Entry.forks -lt 0) {
        throw "Fields 'stars' and 'forks' must be zero or positive."
    }
}

$canonicalEntries = Get-Content $CanonicalDataPath -Raw | ConvertFrom-Json
$enrichedEntries = Get-Content $EnrichedDataPath -Raw | ConvertFrom-Json

$allowedCategories = @(
    "payments",
    "ecommerce",
    "delivery-addressing",
    "education",
    "health",
    "agriculture",
    "public-services",
    "mobility",
    "civic-tech",
    "language-ai",
    "culture-history",
    "meta-catalogue",
    "developer-tools",
    "datasets",
    "environment",
    "community",
    "offline-first",
    "security-identity"
)

$allowedStatuses = @("active", "experimental", "stable", "inactive", "archived", "unknown")

foreach ($entry in $canonicalEntries) {
    Assert-CanonicalEntry -Entry $entry -AllowedCategories $allowedCategories -AllowedStatuses $allowedStatuses
}

foreach ($entry in $enrichedEntries) {
    Assert-EnrichedEntry -Entry $entry -AllowedCategories $allowedCategories -AllowedStatuses $allowedStatuses
}

if ($canonicalEntries.Count -ne $enrichedEntries.Count) {
    throw "Entry count mismatch between canonical and enriched data."
}

$enrichedSlugs = @{}

foreach ($entry in $enrichedEntries) {
    if ([string]::IsNullOrWhiteSpace($entry.slug)) {
        throw "An enriched entry is missing a slug."
    }

    if ($enrichedSlugs.ContainsKey($entry.slug)) {
        throw "Duplicate slug detected in enriched data: $($entry.slug)"
    }

    $enrichedSlugs[$entry.slug] = $true
}

Write-Host "Catalogue JSON validation passed for canonical and enriched data."
