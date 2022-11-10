#include <stdio.h>

int main(void)
{
    printf("Be happy\n");             // "Be happy"를 출력하고 줄을 바꿈(\n)
    printf("12345678901234567890\n"); // "12345678901234567890"를 출력하고 줄을 바꿈(\n)
    printf("My\tfreind\n");           
    // "My" 출력하고 탭 이동 후에 "friend" 출력하고 줄을 바꿈(\n)      
    printf("Goot\bd\tchance\n");      
    // "Goot" 를 출력하고 한 칸 왼쪽으로 이동(\b)해 t를 d로 바꾸고 탭 이동 후 "chance" 출력하고 줄을 바꿈(\n)     
    printf("Cow\rW\a\n");         
    // 맨 앞으로 이동(\r)헤 C를 W로 바꾸고 벨소리(\a)를 내고 줄을 바꿈(\n) 

    return 0;
}

