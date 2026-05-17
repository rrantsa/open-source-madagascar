$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$readmePath = Join-Path $root "README.md"
$dataPath = Join-Path $root "data\\repositories.json"
$startMarker = "<!-- STATS:START -->"
$endMarker = "<!-- STATS:END -->"
$allCategories = @(
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

$categoryDisplayNames = @{
    "payments" = "Payments"
    "ecommerce" = "E-commerce"
    "delivery-addressing" = "Delivery and Addressing"
    "education" = "Education"
    "health" = "Health"
    "agriculture" = "Agriculture"
    "public-services" = "Public Services"
    "mobility" = "Mobility"
    "civic-tech" = "Civic Tech"
    "language-ai" = "Language and AI"
    "culture-history" = "Culture and History"
    "meta-catalogue" = "Meta Catalogue"
    "developer-tools" = "Developer Tools"
    "datasets" = "Datasets"
    "environment" = "Environment"
    "community" = "Community"
    "offline-first" = "Offline-first"
    "security-identity" = "Security and Identity"
}

function New-Table {
    param(
        [string]$Title,
        [hashtable]$Counts
    )

    $lines = @(
        "### $Title",
        "",
        "| Value | Count |",
        "|---|---:|"
    )

    foreach ($entry in $Counts.GetEnumerator() | Sort-Object @{ Expression = "Value"; Descending = $true }, @{ Expression = "Name"; Descending = $false }) {
        $lines += "| $($entry.Name) | $($entry.Value) |"
    }

    return $lines
}

function New-CategoryTable {
    param(
        [hashtable]$Counts,
        [string[]]$CategoryOrder,
        [hashtable]$DisplayNames
    )

    $lines = @(
        "### By Category",
        "",
        '_Counts include both primary `category` values and secondary `additional_categories` memberships._',
        "",
        "| Category | Slug | Count |",
        "|---|---|---:|"
    )

    foreach ($category in $CategoryOrder) {
        $count = 0
        if ($Counts.ContainsKey($category)) {
            $count = $Counts[$category]
        }
        $lines += "| $($DisplayNames[$category]) | " + [char]96 + $category + [char]96 + " | $count |"
    }

    return $lines
}

$items = Get-Content $dataPath -Raw | ConvertFrom-Json
$readme = Get-Content $readmePath -Raw

$categoryCounts = @{}
$statusCounts = @{}
$licenseCounts = @{}

foreach ($item in $items) {
    if (-not $statusCounts.ContainsKey($item.status)) { $statusCounts[$item.status] = 0 }
    if (-not $licenseCounts.ContainsKey($item.license)) { $licenseCounts[$item.license] = 0 }

    $itemCategories = @($item.category)
    if ($null -ne $item.additional_categories) {
        $itemCategories += @($item.additional_categories)
    }

    foreach ($category in ($itemCategories | Select-Object -Unique)) {
        if (-not $categoryCounts.ContainsKey($category)) { $categoryCounts[$category] = 0 }
        $categoryCounts[$category] += 1
    }

    $statusCounts[$item.status] += 1
    $licenseCounts[$item.license] += 1
}

$total = @($items).Count
$representedCategories = $categoryCounts.Keys.Count
$knownLicenseCount = @($items | Where-Object { $_.license -ne "unknown" }).Count
$unknownLicenseCount = $total - $knownLicenseCount
$unknownStatusCount = @($items | Where-Object { $_.status -eq "unknown" }).Count

$lines = @(
    $startMarker,
    "- Total repositories: **$total**",
    "- Categories represented: **$representedCategories / $($allCategories.Count)**",
    "- Repositories with known licenses: **$knownLicenseCount**",
    "- Repositories with unknown licenses: **$unknownLicenseCount**",
    "- Repositories with unknown status: **$unknownStatusCount**",
    ""
)

$lines += New-CategoryTable -Counts $categoryCounts -CategoryOrder $allCategories -DisplayNames $categoryDisplayNames
$lines += ""
$lines += New-Table -Title "By Status" -Counts $statusCounts
$lines += ""
$lines += New-Table -Title "By License" -Counts $licenseCounts
$lines += $endMarker

$statsBlock = ($lines -join "`r`n")

$startIndex = $readme.IndexOf($startMarker)
$endIndex = $readme.IndexOf($endMarker)

if ($startIndex -lt 0 -or $endIndex -lt 0 -or $endIndex -lt $startIndex) {
    throw "README stats markers were not found."
}

$endIndex += $endMarker.Length
$updated = $readme.Substring(0, $startIndex) + $statsBlock + $readme.Substring($endIndex)

Set-Content -Path $readmePath -Value $updated -Encoding UTF8
Write-Output "Updated README stats from data/repositories.json"
