using Microsoft.VisualBasic;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Intrinsics.X86;
using System.Text;
using System.Threading.Tasks;

namespace LeetCode.TypeScript_Problems
{
    public class SalaryRecord
    {
        public int EmployeeId { get; set; }
        public decimal BasicSalary { get; set; }
        public decimal Allowances { get; set; }
    }

    public enum SpendingCategory
    {
        Food,
        Transport,
        Utilities,
    }

    public class Transaction
    {
        public SpendingCategory Category { get; set; }
        public decimal Amount { get; set; }
        public DateTime Timestamp { get; set; }
    }

    public class Edenred_Rupa
    {
        // C# LINQ: Practice group by, select, and where. This is "Senior DSA."

        // Frequency Map(Tally): Just remember how to use a Dictionary<string, int> to count things.

        // Entity Framework / SQL: Review how to optimize a slow query

        // data integrity (handling money).

        // They use "Real-world" scenarios (e.g., "Given a list of employees, find those who haven't been paid").

        // 

        public List<ValidationResult> ProcessSalaries(List<SalaryRecord> salaryRecords)
        {
            var finalRecords = new HashSet<int>();
            var errors = new List<ValidationResult>();

            foreach (var record in salaryRecords)
            {

                if (finalRecords.Contains(record.EmployeeId))
                {
                    errors.Add(new ValidationResult($"Duplicate record found for EmployeeID: {record.EmployeeId}", new[] { nameof(record.EmployeeId) }));
                    continue;
                }
                else
                {
                    if (record.BasicSalary <= 0)
                    {
                        errors.Add(new ValidationResult("Basic salary must be greater than zero.", new[] { nameof(record.EmployeeId) }));
                    }
                    var totalSalary = record.BasicSalary + record.Allowances;
                    if (totalSalary <= 0)
                    {
                        errors.Add(new ValidationResult("Total salary must be greater than zero.", new[] { nameof(record.EmployeeId) }));

                    }

                    finalRecords.Add(record.EmployeeId);
                }
            }

            return errors;
        }

        public List<string> C3PayAggregator(List<Transaction> userTransactions)
        {
            var catExpenditures = new Dictionary<string, decimal>();

            foreach (var transaction in userTransactions)
            {
                var categoryName = transaction.Category.ToString();

                if (catExpenditures.ContainsKey(categoryName))
                {
                    catExpenditures[categoryName] += transaction.Amount;
                }
                else
                {
                    catExpenditures.Add(categoryName, transaction.Amount);
                }
            }

            var topSpends = catExpenditures.OrderByDescending(v => v.Value).Take(3);

            var g = userTransactions.GroupBy(u => u.Category)
                 .Select(g => new
                 {
                     Category = g.Key,
                     TotalAmount = g.Sum(t => t.Amount)
                 }).OrderByDescending(u => u.TotalAmount).Take(3).Select(u => u.Category).ToList();


            return topSpends.Select(t => t.Key).ToList();
        }

        public bool CanProcessRefund(decimal originalAmount, List<decimal> pastRefunds, decimal newRefundAmount)
        {
            var totalRedundsAmount = pastRefunds.Sum();

            var f = 1000 * 0.01;
            return (originalAmount >= (totalRedundsAmount + newRefundAmount));
        }
        // get past spend total
        // if t<=1k 0.01%, prevsum+newsum<=4k then >

        public decimal CalculateCashback(decimal totalSpend)
        {
            if (totalSpend >= 1000 && totalSpend < 4000) return totalSpend * 0.01m;
            else if (totalSpend >= 4000 && totalSpend <= 5000) return totalSpend * 0.02m;
            else if (totalSpend > 5000) return totalSpend * 0.05m;
            else return 0;
        }

        public decimal ProcessCashback()
        {
            var transactions = new List<Transaction>
            {
                new Transaction { Category = SpendingCategory.Food, Amount = 1000, Timestamp = DateTime.Now },
                new Transaction { Category = SpendingCategory.Transport, Amount = 4000, Timestamp = DateTime.Now },
                new Transaction { Category = SpendingCategory.Utilities, Amount = 1000, Timestamp = DateTime.Now }
            };

            var cashBackAmount = 0.0m;

            foreach (var t in transactions)
            {
                cashBackAmount += CalculateCashback(t.Amount);
            }

            return cashBackAmount;
        }
    }
}