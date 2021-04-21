

#include<iostream>
using namespace std;
template<typename T>    //声明模板，T为类型参数

T sum(T a, T b, T c){   //定义通用函数，用T做虚拟类型名
	return a + b +c;
}

int main() {
	cout << sum(1, 2, 3) << "\n";      //T被int取代
	cout << sum(1.0, 2.0, 3.0) << "\n";//T被double取代
	cout << sum(1.5f, 2.5f, 3.5f);     //T被float取代
	
	return 0;
}
