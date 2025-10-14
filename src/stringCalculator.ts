export function add(input: string): number {
    if (input.trim() === '') return 0;

    const nums = input.split(',').map(Number);
    return nums.reduce((a, b) => a + b, 0);

}


