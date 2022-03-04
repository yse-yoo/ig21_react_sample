import React, {state, useState} from 'react'
import PropTypes from 'prop-types'

function Information(props) {
    const [count, setCount] = useState(0)

    function hello() {
        // alert('hello')
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={hello}>Hello</button>
            <p>{count}</p>
            <ul>
                <li>新商品追加！</li>
                <li>本日は休業日です</li>
            </ul>
        </div>
    )
}

Information.propTypes = {}

export default Information
