Feature: Amazon Website Functionality Tests

  # Data-Driven Testing using Scenario Outline & Examples
  @smoke @regression
  Scenario Outline: Multiple products search karna
    Given Main Amazon website open karta hu
    When Search box me "<product>" type karke search button click karta hu
    Then Search results list display honi chahiye
    And Page ke title me "<product>" hona chahiye

    Examples:
      | product    |
      | laptop     |
      | mobile     |
      | headphones |

  # Scenario 2: Today's Deals Navigation
  @smoke
  Scenario: Today's Deals page par navigate karna
    Given Main Amazon website open karta hu
    When Main navigation me "Deals" link par click karta hu
    Then Deals page display hona chahiye

  # Scenario 3: Cart Page Open Karna
  @regression
  Scenario: Shopping Cart page open karke check karna
    Given Main Amazon website open karta hu
    When Main Cart icon par click karta hu
    Then Shopping Cart page display hona chahiye