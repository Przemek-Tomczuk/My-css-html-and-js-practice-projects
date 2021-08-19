#include <cs50.h>
#include <stdio.h>

int start(void);

int main(void)
{
    //Pytanie o początkowy rozmiar populacji
    int n = start();
    
    //Pytanie o końcowy rozmiar populacji
    int x;
    do
    {
        x = get_int("Końcowy rozmiar populacji: ");
    }
    while (x < n);
    
    //Wyliczenie ilośći lat potrzebnej do osiągnięcia oczekiwanego poziomu populacji
    int ilośćlat = 0;
    for (int i = n; x > i; ilośćlat++)
    {
        i = i + (i / 3) - (i / 4);
    }

    printf("Years: %i\n", ilośćlat);
}

//funkcja pytająca o rozmiar populacji
int start(void)
{
    int n;
    do
    {
        n = get_int("Początkowy rozmiar populacji: ");
    }
    while (n < 9);
    return n;
}