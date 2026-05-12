function getRow(rowIndex: number): number[] {
    // Create an array for the target row, initialized with 0s
    const row: number[] = new Array(rowIndex + 1).fill(0);

    // The first element of every row is always 1
   row[0] = 1;

   for (let i = 1; i <= rowIndex; i++)
   {
      // Crucial: We iterate BACKWARDS
      // This way, row[j-1] still represents the value from the previous row
      for (let j = i; j > 0; j--)
      {
         row[j] = row[j] + row[j - 1];
      }
    }

    return row;
}