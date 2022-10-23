
export default function generateNumbers (amountNumbers) {
    return Array.from({length: amountNumbers}, () => Math.floor(Math.random() * 60));
}