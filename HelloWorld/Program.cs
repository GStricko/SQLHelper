namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            
            var firstNum = 5;
            var secondNum = 10;

            Console.Write("Enter a 5 or a 10\n");

            try{

            var num = Convert.ToInt32(Console.ReadLine());

            if (num.Equals(firstNum))
            {
                Console.WriteLine("That's a five!");
            }
            else if (num.Equals(secondNum))
            {
                Console.WriteLine("That's a 10!");
            }
            else
            {
                Console.WriteLine("Wrong!");
            }
            }

            catch
            {
                Console.WriteLine("That's not a number!");
            }

        }
    }
}
