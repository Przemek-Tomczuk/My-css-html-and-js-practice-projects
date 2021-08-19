#include <stdio.h>
#include <cs50.h>

int main(void)
    
{
    string name = get_string("Powiedz jak masz na imię\n");
    printf("hello %s\n", name);
}