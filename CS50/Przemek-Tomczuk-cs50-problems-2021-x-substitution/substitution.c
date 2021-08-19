#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

// Checks if there is any non letter character in string and return value (x > 0) if there is.
int letter_checker(string argv);

// Take string of letters and change it to uppercase.
string make_uppercase(string argv);

// Takes char and checks on what position in alphabet it is. For example, return value for char 'A' will be 0, for 'b' it will be 1 and so on.
int position(char argv);

// Takes string and checks whether there are any duplicates in it, returns value (x > 0) if there are any duplicates.
int repetisions(string argv);


// Takes 26 letter key as command line argument then asks user to input any text. Text will be encrypted according to key. For example,
// if key starts with 'NJQ' then every 'A' will be translated as 'N', every 'B' as 'J' and every 'C' as 'Q' and so on.
int main(int argc, string argv[])
{
    // In first if - else check, program checks whether number of arguments equals 2. If not, program return error message.
    if (argc != 2)
    {
        printf("Usage: ./substitution key\n");
        return 1;
    }
    else
    {
        // We create few variables to later check whether our key has precisely 26 letters, whether it has any duplicates, and whether
        // it contains letters only. If any of this conditions is not met then program returns error message.
        int key_length = strlen(argv[1]);
        int sum = letter_checker(argv[1]);
        string oversized = make_uppercase(argv[1]);
        int repetitions_amount = repetisions(oversized);


        if (key_length != 26)
        {
            printf("Key must cointan at least 26 characters\n");
            return 1;
        }

        else if (sum > 0)
        {
            printf("Key must contain only alphabetic characters\n");
            return 1;
        }

        else if (repetitions_amount > 0)
        {
            printf("Every character should appear only once\n");
            return 1;
        }
        
        // Now program will ask user to input text to be encrypted.
        else
        {
            string plain_text = get_string("Plain text: ");
            
            // Loop that goes through each letter of text to be encrypted.        
            for (int j = 0; j < strlen(plain_text); j++)
            {
                
                // Loop that checks whether letter of text is 'a' or 'A' then whether it is 'b' or 'B' and so on. When it decides the letter
                // it checks this letter position in alphabet. Then it replaces this letter in text by switching it for proper letter 
                // from key. For example if we are checking letter 'C' then its position in alphabet is 3 then this letter will be replaced by
                // third letter of our key.
                for (int i = 65; i < 91; i++)
                {
                    
                    if (plain_text[j] == (i + 32))
                    {
                        int g = position(plain_text[j]);
                        if (plain_text[j] != argv[1][g])
                        {
                            plain_text[j] = tolower(argv[1][g]);
                            
                            // This line is to go out of the loop when the letter is replaced by another.
                            i = 91;
                        }
                    }
                    else if (plain_text[j] == i)
                    {
                        int g = position(plain_text[j]);
                        if (plain_text[j] != argv[1][g])
                        {
                            plain_text[j] = toupper(argv[1][g]);
                            
                            // This line is to go out of the loop when the letter is replaced by another.
                            i = 91;
                        }
                    }
                }
            }


            printf("ciphertext: %s\n", plain_text);
        }
    }
}

int letter_checker(string argv)
{
    int sum = 0;

    for (int i = 0; i < strlen(argv); i++)
    {
        if (isalpha(argv[i]) == 0)
        {
            sum += 1;
        }
    }
    return sum;
}

int repetisions(string argv)
{
    int sum = 0;

    for (int i = 0; i <= strlen(argv); i++)
    {
        for (int j = i + 1; j <= strlen(argv); j++)
        {
            if (argv[i] == argv[j])
            {
                sum += 1;
            }
        }
    }
    return sum;

}

string make_uppercase(string argv)
{
    for (int i = 0; i > strlen(argv); i++)
    {
        argv[i] = toupper(argv[i]);
    }
    return argv;
}

int position(char argv)
{
    string alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    int pos = -1;


    do
    {
        pos += 1;
    }
    while (tolower(alfabet[pos]) != tolower(argv));
    return pos;
}

