#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Points assigned to each letter of the alphabet

int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

// Letters of the alphabet

char Letters[] = {"A""B""C""D""E""F""G""H""I""J""K""L""M""N""O""P""Q""R""S""T""U""V""W""X""Y""Z"};

///Function that will count score of each word

int compute_score(string word);

//Function that will turn words written by players into same words but written in uppercase

string make_uppercase(string word);


//Function that will ask both players to input a word and then will determine who is the winner

int main(void)
{
    // Get input words from both players
    string small_word1 = get_string("Player 1: ");
    string small_word2 = get_string("Player 2: ");
    
    string word1 = make_uppercase(small_word1);
    string word2 = make_uppercase(small_word2);

    // Score both words
    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    if (score1 > score2)
    {
        printf("Player 1 wins\n%i", score1);
    }
    
    else if (score1 < score2)
    {
        printf("Player 2 wins\n%i", score2);
    }
    
    else
    {
        printf("Tie\n");
    }
}

int compute_score(string word)
{
    int score = 0;
    
    
    for (int i = 0; i < strlen(word); i++)
    {
        for (int j = 0; j < strlen(Letters); j++)
        {
            if (Letters[j] == word[i])
            {
                score += POINTS[j];
            }
        }
    }
    return score;
}

string make_uppercase(string word)
{
    for (int i = 0, n = strlen(word); i < n; i++)
    {
        word[i] = toupper(word[i]);
    }
    return word;
}



