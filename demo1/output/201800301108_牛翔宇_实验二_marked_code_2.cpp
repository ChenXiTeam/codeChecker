

#include<iostream>
#include<string.h>
using namespace std;

int main(){
	char str[]="hu123nn5fja8;[]67";
	int a[] = {0}, value = 0, count = 0;
	bool hasValue = false;
	char *p;
	p = &str[0];
	while(*p != '\0'){
		while(*p >= '0' && *p <= '9'){
			value = value * 10 + *p - '0';
			p = p + 1;
			hasValue = true;
		}		
		if(hasValue){
			a[count] = value;
			count++;
			value = 0;
			hasValue = false;
		}		
		p = p + 1;
	}
	cout << "字符串中的数字：" << "\n";
	for(int j = 0; j < count; j++){		 
			cout << a[j] << "\t";	
	}
	cout << "共有" << count << "个"; 
	return 0;		
}
