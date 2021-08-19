#include <cs50.h>
#include <stdio.h>

//Czytać funkcje w kolejności w jakiej zostały spisane poniżej

// Funkcja, która pobiera numer
unsigned long card(void);

//Funkcja, która liczy długość numeru
int długość(unsigned long a);

//Funkcja, która znajduje cyfrę znajdującą się na danym miejscu w numerze
int znajdźpozycję(int x, unsigned long karta);

//Funkcja, która zwraca ostatni numer karty
int zwrot(unsigned long numerek, unsigned long numerek2);

//Funkcja, która zwraca ostatni numer karty, ale bez mnożenia nieparzystych numerów razy dwa
int zwrot2(unsigned long numerek);

//Funkcja, która dodaje do siebie elementy dwucyfrowych liczb
int sumowanie(int karta);

int main(void)
{
    int suma = 0;
    int i = 0;
    unsigned long karta = card();
    unsigned long karta2 = karta;
    int len = długość(karta);
    int pierwsza = znajdźpozycję(2, karta);
    int druga = znajdźpozycję(3, karta);

    do
    {
        suma += zwrot(karta, karta2);
        i++;
        karta /= 10;
    }
    while (i < len);

    if (((suma % 10) == 0) && (len == (15) && ((pierwsza == 3) && ((druga == 4) || (druga == 7)))))
    {
        printf("AMEX\n");
    }

    else if (((suma % 10) == 0) && ((len == (16) || (len == 13)) && (pierwsza == 4)))
    {
        printf("VISA\n");
    }

    else if (((suma % 10) == 0) && (len == (16) && (pierwsza == 5) && (druga < 6)))
    {
        printf("MASTERCARD\n");
    }

    else
    {
        printf("INVALID\n");
    }
    

}

//Uzyskanie numeru od użytkownika
unsigned long card(void)
{
    unsigned long card;
    do
    {
        card = get_long("Card number: ");
    }
    while (card < 1);
    return card;
}

//Wyliczanie z jak wielu cyfr składa się liczba
int długość(unsigned long a)
{
    int licznik = 0;

    do
    {
        a = a / 10;
        licznik++;
    }
    while (a > 0);
    return licznik;
}

//Funkcja, która ustala jaka cyfra znajduje się we wskazanej liczbie na wskazanej pozycji w porządku (pozycja, liczba)
int znajdźpozycję(int s, unsigned long karta)
{
    int length = długość(karta);

    if (length != s)
    {
        do
        {
            karta = karta / 10;
            length--;
        }
        while (s <= length);
        return (karta % 10);
    }
    else
    {
        return (karta % 10);
    }
}

//Funkcja, która przeszukuje i zwraca kolejne cyfry w liczbie, licząc od końca co drugą zwraca pomnożoną razy dwa
int zwrot(unsigned long numerek, unsigned long numerek2)
{
    int length = długość(numerek);
    int len = długość(numerek2);
    int n = 0;

    for (int pozycja = 1; pozycja <= length; pozycja++)
    {
        n = znajdźpozycję(pozycja, numerek);
    }
    //Warunek pozwalający określić czy liczba jest co drugą od końca i czy powinna być pomnożona razy dwa, czy nie.
    if ((len - length) % 2 == 0)
    {
        return n;
    }
    
    else if ((n * 2) < 10)
    {
        return (n * 2); 
        
    }
    //Jeśli wartość cyfry pomnożona razy dwa przekracza dziesięć, zamiast zwrócenia tej cyfry, funkcja zwraca sumę cyfr
    // Z jakich składa się ta cyfra. Np 6 * 2 = 12, 12 > 10, więc zamiast zwracać 12 funkcja zwraca 1 + 2
    else
    {
        return sumowanie(n * 2);
    }
}

//Działa jak funkcja zwrot, ale bez warunków z mnożeniem co drugiej liczby od końca, funkcja powstała w celu stworzenia funkcji sumowanie
int zwrot2(unsigned long numerek)
{

    int length = długość(numerek);
    int n = 0;

    for (int pozycja = 1; pozycja <= length; pozycja++)
    {
        n = znajdźpozycję(pozycja, numerek);
    }
    return n;

}

//Funkcja, która dodaje do siebie obie cyfry z jakich składa się dwucyfrowa liczba
int sumowanie(int karta)
{
    int suma = 0;
    int i = 0;
    int len = 2;

    do
    {
        suma += zwrot2(karta);
        i++;
        karta /= 10;
    }
    while (i < len);
    return suma;

}