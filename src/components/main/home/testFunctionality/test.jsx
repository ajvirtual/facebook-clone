import Clickable from './clickable'
import Toogable from './toogable'

export default function test() {
    return (
        <>
            <Toogable Clickable={Clickable} />
        </>
    )
}