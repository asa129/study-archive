export const Practice2 = () => {
    const calculate = (num: number): number => {
        const total = num * 1.1;
        return total;
    }
    const onClickCalculate = () => {
        alert(calculate(1000));
    };
    return (
        <div>
            <p>練習問題：返却値の型指定</p>
            <button onClick={onClickCalculate}>計算するよ</button>
        </div>
    );
}