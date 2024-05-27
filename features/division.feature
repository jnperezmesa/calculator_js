Feature: division
  Basic division

  Scenario Outline: division of two numbers
    Given division: a calculator
    When division: first number is <first_number> and second number is <second_number>
    Then I should be told <answer>

    Examples:
      | first_number | second_number | answer |
      | 1            | 2             | 0.5    |
      | -1           | 2             | -0.5   |
      | -1           | -4            | 0.25   |

  Scenario Outline: division of two decimal numbers
    Given division: a calculator
    When division: first number is <first_number> and second number is <second_number>
    Then I should be told <answer>

    Examples:
      | first_number | second_number | answer |
      | 0.1          | 0.2           | 0.5    |
      | -0.1         | 0.2           | -0.5   |
      | 0.1          | -0.2          | -0.5   |
      | -0.1         | -0.2          | 0.5    |
      | 10           | 0.1           | 100    |

  Scenario Outline: division of string and number
    Given division: a calculator
    When division: first number is "<first_number>" and second number is <second_number>
    Then I should be told "<answer>"

    Examples:
      | first_number | second_number | answer         |
      | 1            | 2             | Invalid number |
      | -1           | 2             | Invalid number |
      | a            | -1            | Invalid number |

  Scenario Outline: division of number and string
    Given division: a calculator
    When division: first number is <first_number> and second number is "<second_number>"
    Then I should be told "<answer>"

    Examples:
      | first_number | second_number | answer         |
      | 1            | 2             | Invalid number |
      | -1           | 2             | Invalid number |
      | -1           | a             | Invalid number |

  Scenario Outline: division of string and string
    Given division: a calculator
    When division: first number is "<first_number>" and second number is "<second_number>"
    Then I should be told "<answer>"

    Examples:
      | first_number | second_number | answer         |
      | 1            | 2             | Invalid number |
      | -1           | 2             | Invalid number |
      | Potatoe      | Salad         | Invalid number |

  Scenario Outline: division by 0
    Given division: a calculator
    When division: first number is <first_number> and second number is <second_number>
    Then I should be told "<answer>"
    Examples:
      | first_number | second_number | answer       |
      | -10          | 0             | Not possible |
      | 10           | 0             | Not possible |
      | 0            | 0             | Not possible |