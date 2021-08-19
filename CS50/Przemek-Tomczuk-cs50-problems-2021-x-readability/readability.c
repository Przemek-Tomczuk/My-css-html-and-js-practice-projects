#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

//Function that counts amount of letters in string
int Letters_count(string Text);

//Function that counts amount of words in string
float Words_count(string Text);

//Function that counts amount of sentences used in string
int Sentences_count(string Text);

float averagel(string Text);

float averages(string Text);

//float 0_to_hundred(string Text);

//Function that ask user to input text and then returns amount of letters and words in that text
int main(void)
{
    string Text = get_string("Text: ");
    int length = Letters_count(Text);
    //int words = Words_count(Text);
    int sentences = Sentences_count(Text);
    float L = averagel(Text);
    float S = averages(Text);
    float index = 0.0588 * L - 0.296 * S - 15.8;
    
    if (index >= 16)
    {
        printf("Grade 16+\n");
    }
    
    else if (index <= 1)
    {
        printf("Before Grade 1\n");
    }
    
    else
    {
        printf("Grade %i\n", (int) round(index)); 
    }
    
}


int Letters_count(string Text)
{
    int length = 0;

    for (int i = 0; i < strlen(Text); i++)
    {
        if (isalpha(Text[i]) != 0)
        {
            length += 1;
        }
    }
    return length;

}

float Words_count(string Text)
{
    float length = 0;

    for (int i = 0; i < strlen(Text); i++)
    {
        if (Text[i] == ' ')
        {
            length += 0.01;
        }
    }
    return length + 0.01;

}

int Sentences_count(string Text)
{
    int length = 0;

    for (int i = 0; i < strlen(Text); i++)
    {
        if ((Text[i] == '.') || (Text[i] == '?') || (Text[i] == '!'))
        {
            length += 1;
        }
    }
    return length;
}

float averagel(string Text)
{
    float average = Letters_count(Text) / Words_count(Text);
    return average;
}

float averages(string Text)
{
    float average = Sentences_count(Text) / Words_count(Text);
    return average;
}

//float 0_to_hundred(string Text)
//{
    
//}