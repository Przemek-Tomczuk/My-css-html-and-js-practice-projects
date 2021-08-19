#include <stdio.h>
#include <cs50.h>

int wysokość(void);

//Buduj piramidę
int main(void)
{
    int n = wysokość();
    int counter = 1;
    //Pętla która odpala się tyle razy ile piramida ma pięter
    for (int i = 0; i < n; i++)
    {
        //Zestaw pętli, które drukują odpowiednie ilości spacji i hashtagów
        for (int g = n; g > counter; g--)
        {
            printf(" ");
        }
        for (int j = 0; counter > j; j++)
        {
            printf("#");
        }
        printf("  ");
        for (int c = 0; counter > c; c++)
        {
            printf("#");
        }
        printf("\n");
        counter++;
    }
}



// Pytaj użytkownika o wysokość piramidy
int wysokość(void)
{
    int height;
    do
    {
        height = get_int("Height(1-8): ");
    }
    while (height < 1 || height > 8);
    return height;
}
