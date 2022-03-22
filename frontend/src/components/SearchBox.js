import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function SearchBox() {

    const [keyword, setKeyword] = useState("")

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword){
            navigate(`/?keyword=${keyword}&page=1`)
        }
    }

    return (
        <Form onSubmit={submitHandler} className="d-flex mx-3">
            <Form.Control
                type="text"
                name="q"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="mr-sm-2 ml-sm-5"
            >
            </Form.Control>
            <Button
                type="submit"
                variant="outline-success"
                className="padding"
            >
                Submit
            </Button>
        </Form>
    )
}

export default SearchBox