Feature: CalculatorUI
  Basic UI

  Scenario Outline: TestUICalculator2Numbers
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

  Scenario Outline: TestUICalculator2Numbers
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
      | 1         | -          | 2         | =          | -1     | 1-2 =    |
      | 3         | *          | 3         | =          | 9      | 3*3 =     |
      | 9         | /          | 8         | =          | 1.125  | 9/8 =     |
