Feature: squareRoot
  Basic squareRoot

  Scenario Outline: square root of numbers
    Given squareRoot: a calculator
    When squareRoot: number is <number>
    Then I should be told <answer>

    Examples:
      | number | answer |
      | 0      | 0      |
      | 1      | 1      |
      | 2      | 1.414  |
      | 3      | 1.732  |
      | 9      | 3      |
      | 73     | 8.544  |
      | 100    | 10     |
      | 361201 | 601    |


  Scenario Outline: square root of string
    Given squareRoot: a calculator
    When squareRoot: number is "<number>"
    Then I should be told "<answer>"

    Examples:
      | number | answer         |
      | 1      | Invalid number |
      | 32     | Invalid number |
      | a      | Invalid number |


  Scenario Outline: square root of numbers
    Given squareRoot: a calculator
    When squareRoot: number is <number>
    Then I should be told "<answer>"

    Examples:
      | number | answer       |
      | -1     | Not possible |
      | -10    | Not possible |
      | -43    | Not possible |