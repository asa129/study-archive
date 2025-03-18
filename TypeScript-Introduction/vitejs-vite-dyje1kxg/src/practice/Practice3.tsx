export const Practice3 = () => {
    const calculate = (num: number) => {
        const total = num * 1.1;
        return total;
    }
    const onClickCalculate = () => {
        let total: number = 0;
        total = calculate(1000);
        alert(total);
    };
    return (
        <div>
            <p>練習問題：変数の型指定</p>
            <button onClick={onClickCalculate}>計算するよ</button>
        </div>
    );
}