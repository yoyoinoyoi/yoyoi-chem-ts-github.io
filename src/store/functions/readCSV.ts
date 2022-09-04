export const readCSV = function():[string[][], string[], string[]] {    
    // CSVファイルを文字列として取得
    // const srt = new XMLHttpRequest();

    // srt.open("GET", "./chemistry.csv", false);

    // try {
    //     srt.send(null);
    // } catch (err) {
    //     console.log(err)
    // }

    // 配列を用意
    const csletr: string[][] = 
    [['Action', 'Ca', 'Ba', 'Al', 'Ag', 'Pb', 'Fe(2+)', 'Fe(3+)', 'Zn', 'Cu'],
    ['火をつける', '橙赤', '黄緑', '-', '-', '-', '-', '-', '-', '-'],
    ['H2S', '-', '-', '-', '黒色沈殿', '黒色沈殿', '-', '-', '-', '黒色沈殿'],
    ['H2S(塩基性条件)', '-', '-', '-', '黒色沈殿', '黒色沈殿', '黒色沈殿', '黒色沈殿', '白色沈殿', '黒色沈殿'],
    ['NH3aq', '-', '-', '白色沈殿', '褐色沈殿、過剰で溶解(無色)', '無色沈殿', '緑白色沈殿', '赤褐色沈殿', '白色沈殿、過剰で溶解', '青白色沈殿、過剰で溶解(深青色)'],
    ['HCl', '-', '-', '白色沈殿', '白色沈殿', '白色沈殿、熱水で溶解', '淡黄色沈殿', '-', '-', '-'],
    ['CO3', '白色沈殿', '白色沈殿', '-', '-', '-', '-', '-', '-', '-'],
    ['NaOH', '-', '-', '白色沈殿、過剰で溶解', '白色沈殿、すぐに褐色沈殿へ変化', '無色沈殿、過剰で溶解', '緑白色沈殿', '赤褐色沈殿', '白色沈殿、過剰で溶解', '青白色沈殿'],
    ['CrO42-', '-', '黄色沈殿', '-', '赤褐色沈殿', '黄色沈殿', '-', '-', '-', '-']];
    const elementsname: string[] = [];
    const actionname: string[] = [];

    // // 改行ごとに配列化
    // const lines = srt.responseText.split(/\r\n|\n/);

    // // 1行ごとに処理
    // for (let i = 0; i < lines.length; ++i) {
    //     const cells = lines[i].split(",");
    //     if (cells.length != 1) {
    //         csletr.push(cells);
    //     }
    // }
    for (let i = 0; i < csletr.length; i++) {
        for (let j = 0; j < csletr[0].length; j++){
            if (i == 0 && j != 0){
                elementsname.push(csletr[i][j]);
            }
            if (i != 0 && j == 0){
                actionname.push(csletr[i][j]);
            }
        }
    }
    return [csletr, actionname, elementsname];
}