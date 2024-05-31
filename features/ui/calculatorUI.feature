Feature: CalculatorUI

  Basic UI

  Scenario Outline: TestUICalculator2click

    Given UI: I am on the calculator
    When UI: I click on "<first_key>"
    And UI: I click on "<second_key>"
    Then UI: I should be told "<answer>"
    And UI: Previous should tell "<operation>"

    Examples:
      | first_key | second_key | answer | operation |
      | 9         | √          | 3      | √9 =      |
      | 2         | e          | 7.389  | e^2 =     |
      | 1         | ⌫          | 0      |           |

  Scenario Outline: TestUICalculator3clicks

    Given UI: I am on the calculator
    When UI: I click on "<first_key>"
    And UI: I click on "<second_key>"
    And UI: I click on "<third_key>"
    Then UI: I should be told "<answer>"
    And UI: Previous should tell "<operation>"

    Examples:
      | first_key | second_key | third_key | answer | operation |
      | 9         | √          | =         | 3      | √9 =      |
      | 2         | e          | =         | 7.389  | e^2 =     |
      | 1         | ⌫          | 0         | 0      |           |
      | 5         | +          | 3         | 3      | 5+       |
      | 7         | -          | 4         | 4      | 7-       |

  Scenario Outline: TestUICalculator4clicks

    Given UI: I am on the calculator
    When UI: I click on "<first_key>"
    And UI: I click on "<second_key>"
    And UI: I click on "<third_key>"
    And UI: I click on "<fourth_key>"
    Then UI: I should be told "<answer>"
    And UI: Previous should tell "<operation>"

    Examples:
      | first_key | second_key | third_key | fourth_key | answer | operation |
      | 1         | +          | 1         | =          | 2      | 1+1 =     |
      | 1         | -          | 2         | =          | -1     | 1-2 =     |
      | 3         | *          | 3         | =          | 9      | 3*3 =     |
      | 9         | /          | 8         | =          | 1.125  | 9/8 =     |
      | 8         | +          | 8         | +          | 0      | 16        |

  Scenario Outline: TestUICalculator5clicks

    Given UI: I am on the calculator
    When UI: I click on "<first_key>"
    And UI: I click on "<second_key>"
    And UI: I click on "<third_key>"
    And UI: I click on "<fourth_key>"
    And UI: I click on "<fifth_key>"
    Then UI: I should be told "<answer>"
    And UI: Previous should tell "<operation>"

    Examples:
      | first_key | second_key | third_key | fourth_key | fifth_key | answer | operation |
      | 1         | .          | 1         | 2          | √         | 1.058      | √1.12 =     |
      | 9         | +          | 8         | =          | ⌫         | 1      |           |

  Scenario Outline: TestUICalculator6clicks
    Given UI: I am on the calculator
    When UI: I click on "<first_key>"
    And UI: I click on "<second_key>"
    And UI: I click on "<third_key>"
    And UI: I click on "<fourth_key>"
    And UI: I click on "<fifth_key>"
    And UI: I click on "<sixth_key>"
    Then UI: I should be told "<answer>"
    And UI: Previous should tell "<operation>"
    Examples:
      | first_key | second_key | third_key | fourth_key | fifth_key | sixth_key | answer  | operation |
      | 1         | +          | 2         | *          | 3         | =         | 9       | 3*3 =     |
      | 5         | -          | 2         | /          | 2         | =         | 1.5     | 3/2 =     |
      | 8         | √          | +         | 2          | =         | e         | 124.961 | e^4.828 = |

  Scenario Outline: TestUICalculator7clicks
    Given UI: I am on the calculator
    When UI: I click on "<first_key>"
    And UI: I click on "<second_key>"
    And UI: I click on "<third_key>"
    And UI: I click on "<fourth_key>"
    And UI: I click on "<fifth_key>"
    And UI: I click on "<sixth_key>"
    And UI: I click on "<seventh_key>"
    Then UI: I should be told "<answer>"
    And UI: Previous should tell "<operation>"
    Examples:
      | first_key | second_key | third_key | fourth_key | fifth_key | sixth_key | seventh_key | answer    | operation         |
      | +/-       | 5          | +         | 3          | *         | 2         | =           | -4       | -2*2 =          |
      | 1         | 0          | e         | +          | 5         | √         | =           | 22028.702 | 22026.466+√5 = |

  Scenario Outline: TestUICalculatorErrorHandling
    Given UI: I am on the calculator
    When UI: I click on "<first_key>"
    And UI: I click on "<second_key>"
    And UI: I click on "<third_key>"
    And UI: I click on "<fourth_key>"
    Then UI: I should be told "<error_message>"
    Examples:
      | first_key | second_key | third_key | fourth_key | error_message |
      | 5         | /          | 0         | =          | Not possible  |
      | +/-       | 5          | √         | =           | Not possible  |

  Scenario: TestUICalculatorClearButton
    Given UI: I am on the calculator
    When UI: I click on "5"
    And UI: I click on "+"
    And UI: I click on "3"
    And UI: I click on "clear"
    Then UI: I should be told "0"
    And UI: Previous should tell ""

  Scenario Outline: TestUICalculatorDecimalNumbers
    Given UI: I am on the calculator
    When UI: I click on "<first_key>"
    And UI: I click on "."
    And UI: I click on "<second_key>"
    And UI: I click on "<operation>"
    And UI: I click on "<third_key>"
    And UI: I click on "="
    Then UI: I should be told "<answer>"
    And UI: Previous should tell "<operation_display>"
    Examples:
      | first_key | second_key | operation | third_key | answer | operation_display |
      | 2         | 5          | +         | 1         | 3.5    | 2.5+1 =           |
      | 8         | 1          | -         | 3         | 5.1    | 8.1-3 =           |
