Feature: Exponential
  Basic exponential

  Scenario Outline: Exponential of numbers
    Given exponential: a calculator
    When exponential: I calculate the exponential of <number>
    Then I should be told <answer>

    Examples:
      | number | answer    |
      | 0      | 1.0       |
      | 1      | 2.718     |
      | 2      | 7.389     |
      | 3      | 20.085    |
      | 9      | 8103.084  |
      | 10     | 22026.466 |
      | 5      | 148.413   |
      | -1     | 0.368     |
      | -2     | 0.135     |

  Scenario Outline: Exponential of invalid input
    Given exponential: a calculator
    When exponential: number is "<number>"
    Then I should be told "<answer>"

    Examples:
      | number | answer         |
      | a      | Invalid number |
      | hello  | Invalid number |
