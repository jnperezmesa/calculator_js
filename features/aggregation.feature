Feature: aggretation
  Basic aggregation

  Scenario Outline: aggregation of two numbers
    Given aggregation: a calculator
    When aggregation: first number is <first_number> and second number is <second_number>
    Then I should be told <answer>

  Examples:
    | first_number  | second_number   | answer  |
    | 1             | 2               | 3       |
    | -1            | 2               | 1       |
    | 0             | 0               | 0       |
    | -1            | -4              | -5      |

  Scenario Outline: aggregation of two decimal numbers
    Given aggregation: a calculator
    When aggregation: first number is <first_number> and second number is <second_number>
    Then I should be told <answer>

  Examples:
    | first_number  | second_number   | answer  |
    | 0.1            | 0.2            | 0.3     |
    | -0.1           | 0.2            | 0.1     |
    | 0.1            | -0.2           | -0.1    |

  Scenario Outline: aggregation of string and number
    Given aggregation: a calculator
    When aggregation: first number is "<first_number>" and second number is <second_number>
    Then I should be told "<answer>"

    Examples:
    | first_number  | second_number   | answer      |
    | 1             | 2               | Invalid number       |
    | -1            | 2               | Invalid number       |
    | a             | -1              | Invalid number       |

  Scenario Outline: aggregation of number and string
    Given aggregation: a calculator
    When aggregation: first number is <first_number> and second number is "<second_number>"
    Then I should be told "<answer>"

  Examples:
    | first_number  | second_number   | answer      |
    | 1             | 2               | Invalid number       |
    | -1            | 2               | Invalid number       |
    | -1            | a               | Invalid number       |

  Scenario Outline: aggregation of string and string
    Given aggregation: a calculator
    When aggregation: first number is "<first_number>" and second number is "<second_number>"
    Then I should be told "<answer>"

  Examples:
    | first_number  | second_number   | answer      |
    | 1             | 2               | Invalid number       |
    | -1            | 2               | Invalid number       |
    | Potatoe       | Salad           | Invalid number       |
