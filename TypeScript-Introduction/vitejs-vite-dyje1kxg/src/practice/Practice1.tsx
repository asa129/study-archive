export const Practice1 = () => {
    const calculate = (num: number) => {
        const total = num * 1.1;
        alert(total);
    }
    const onClickCalculate = () => calculate(1000);
    return (
        <div>
            <p>練習問題：引数の型指定</p>
            <button onClick={onClickCalculate}>計算するよ</button>
        </div>
    );
}