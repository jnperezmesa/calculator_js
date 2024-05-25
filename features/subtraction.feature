Feature: subtraction
  Basic subtraction

  Scenario Outline: Subtract two numbers
    Given subtraction: a calculator
    When subtraction: first number is <first_number> and second number is <second_number>
    Then I should be told <answer>

  Examples:
    | first_number  | second_number   | answer  |
    | 3             | 2               | 1       |
    | -1            | 2               | -3      |
    | 0             | 0               | 0       |
    | -1            | -4              | 3       |

  Scenario Outline: Subtract two numbers
    Given subtraction: a calculator
    When subtraction: first number is <first_number> and second number is <second_number>
    Then I should be told <answer>

  Examples:
    | first_number  | second_number   | answer  |
    | 0.1            | 0.2            | -0.1     |
    | -0.1           | 0.2            | -0.3     |
    | 0.1            | -0.2           | 0.3    |

  Scenario Outline: Subtract string and number
    Given subtraction: a calculator
    When subtraction: first number is "<first_number>" and second number is <second_number>
    Then I should be told "<answer>"

    Examples:
    | first_number  | second_number   | answer      |
    | 1             | 2               | Invalid number       |
    | -1            | 2               | Invalid number       |
    | a             | -1              | Invalid number       |

  Scenario Outline: Subtract number and string
    Given subtraction: a calculator
    When subtraction: first number is <first_number> and second number is "<second_number>"
    Then I should be told "<answer>"

  Examples:
    | first_number  | second_number   | answer      |
    | 1             | 2               | Invalid number       |
    | -1            | 2               | Invalid number       |
    | -1            | a               | Invalid number       |

  Scenario Outline: Subtract string and string
    Given subtraction: a calculator
    When subtraction: first number is "<first_number>" and second number is "<second_number>"
    Then I should be told "<answer>"

  Examples:
    | first_number  | second_number   | answer      |
    | 1             | 2               | Invalid number       |
    | -1            | 2               | Invalid number       |
    | Potatoe       | Salad           | Invalid number       |
