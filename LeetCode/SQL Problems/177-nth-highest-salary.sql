CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
--Shift N down by 1 to represent the exact number of rows to skip
  SET N = N - 1;

RETURN(
    SELECT DISTINCT salary 
      FROM Employee
      ORDER BY salary DESC
      LIMIT 1 OFFSET N
);
END