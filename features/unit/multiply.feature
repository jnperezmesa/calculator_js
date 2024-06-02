Feature: multiplication
  Basic multiplication

  Scenario Outline: multiplication of two numbers
    Given multiplication: a calculator
    When multiplication: first number is <first_number> and second number is <second_number>
    Then I should be told <answer>
    Examples:
      | first_number | second_number | answer |
      | 1            | 2             | 2      |
      | -1           | 2             | -2     |
      | 0            | 0             | 0      |
      | -1           | -4            | 4      |

  Scenario Outline: multiplication of two decimal numbers
    Given multiplication: a calculator
    When multiplication: first number is <first_number> and second number is <second_number>
    Then I should be told <answer>
    Examples:
      | first_number | second_number | answer |
      | 0.1          | 0.2           | 0.02   |
      | -0.1         | 0.2           | -0.02  |
      | 0.1          | -0.2          | -0.02  |
      | -0.1         | -0.2          | 0.02   |

  Scenario Outline: multiplication of string and number
    Given multiplication: a calculator
    When multiplication: first number is "<first_number>" and second number is <second_number>
    Then I should be told "<answer>"
    Examples:
      | first_number | second_number | answer         |
      | 1            | 2             | Invalid number |
      | -1           | 2             | Invalid number |
      | a            | -1            | Invalid number |

  Scenario Outline: multiplication of number and string
    Given multiplication: a calculator
    When multiplication: first number is <first_number> and second number is "<second_number>"
    Then I should be told "<answer>"
    Examples:
      | first_number | second_number | answer         |
      | 1            | 2             | Invalid number |
      | -1           | 2             | Invalid number |
      | -1           | a             | Invalid number |

  Scenario Outline: multiplication of string and string
    Given multiplication: a calculator
    When multiplication: first number is "<first_number>" and second number is "<second_number>"
    Then I should be told "<answer>"
    Examples:
      | first_number | second_number | answer         |
      | 1            | 2             | Invalid number |
      | -1           | 2             | Invalid number |
      | Potatoe      | Salad         | Invalid number |
