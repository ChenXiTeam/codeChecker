

#include <iostream>
using namespace std;

int main() {
	double x1 = 0, x2 = 0, a = 0, num = 1;
	cin >> a;
	
	if(a < 0){
		cout << "输入错误！"; 
		return 0; 
	}
	while(a > 0){
			x1 = a / 2;
			x2 = (x1 + a / x1) / 2;
			cout << "第1次迭代结果为" << x2 << "\n"; 
			while(x2 - x1 > 0.00001 || x2 - x1 < -0.00001){
				x1 = x2;
				x2 = (x1 + a / x1) / 2;
				num++;
				cout << "第" << num << "次迭代结果为" << x2 << "\n";
			}
			cout << "最终迭代结果为" << x2 << "\n"; 
			cout << "请输入下一个数（输入负数退出）：";
			cin >> a; 
	}
	return 0; 
}
