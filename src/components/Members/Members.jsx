import React, { useEffect, useRef, useState } from 'react';
import { IoFilterOutline } from "react-icons/io5";
import Member from '../Member/Member';
const baseUrl = 'http://localhost:5000'

const Members = () => {

    const [domain, setDomain] = useState('')
    const [gender, setGender] = useState([])
    const [available, setAvailable] = useState([])
    const [displayMembers, setDisplayMembers] = useState([])
    const [show, setShow] = useState(20)
    const [skip, setSkip] = useState(0)
    const [pageCount, setPageCount] = useState(1)
    const [reload, setReload] = useState(false)

    const handleCheckbox = async (className, state) => {
        const inputField = document.getElementsByClassName(className)
        const array = []
        for (let input of inputField) {
            if (input.checked) {

                array.push(input.value)

            }
        }
        state([...array])



    }
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${baseUrl}/api/users/getfiltereduser?show=${show}&skip=${skip}&domain=${domain}&gender=${gender}&available=${available}`, {
                    method: "Post",
                    headers: {
                        "Content-Type": "application/json",

                    },

                    body: JSON.stringify({ gender, available })

                })
                const result = await res.json()
                console.log(result)
                setDisplayMembers([...result.user])
                const page = Math.ceil(result.count / show)
                setPageCount(page)



            } catch (e) {
                console.log(e)

            }

        })()
    }, [domain, gender, available])
    useEffect(() => {
        (async () => {
            const res = await fetch(`${baseUrl}/api/users?show=${show}&skip=${skip}`)
            const result = await res.json()

            setDisplayMembers([...result.user])
            const page = Math.ceil(result.count / show)
            setPageCount(page)
        })()

    }, [show, skip, reload])
    useEffect(() => {
        console.log(displayMembers, 'from use effecr')
    }, [displayMembers])
    // modal part 
    useEffect(() => {
        var modal = document.getElementById("modal");
        var btn = document.getElementById("modalBtn");
        var span = document.getElementsByClassName("close")[0];
        btn.onclick = function () {
            modal.style.display = "block";
        }
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    }, [])

    const handleSearch = async (e) => {
        const searchValue = e.target.value
        if (searchValue.length == 0) {
            setReload(!reload)

        }
        try {
            const res = await fetch(`${baseUrl}/api/users/getbyname?search=${searchValue}&show=${show}&skip=${skip}`)
            const result = await res.json()
            setDisplayMembers([...result.user])
            const page = Math.ceil(result.count / show)
            setPageCount(page)



        } catch (error) {

        }


    }

    return (
        <div className='px-1'>
            <section className='flex justify-center items-center  flex-col'>
                <h1 className='text-4xl font-semibold py-3'>Search Members</h1>
                <input type="text" name="" id="" placeholder='Write members name' onKeyUp={handleSearch} className='px-3 outline-none border-solid border-blue-500 border-2 w-[250px] rounded-md' />
            </section>


            <section className='flex justify-between shadow-md py-3 sha'>
                <div className='flex items-center gap-2 cursor-pointer' id='modalBtn'>
                    <IoFilterOutline /> <span>Filter</span>
                </div>
                <div className=''>
                    <div>
                        <label htmlFor="dropdown">show:</label>
                        <select id="dropdown" onChange={(e) => setShow(e.target.value)} className='cursor-pointer'>

                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>

                        </select>
                    </div>

                </div>


            </section>
            {/*-------------------------------------------------------------- modal -----------------------------------------------*/}


            <section className=' fixed top-0 left-0 w-full bg-[rgba(0,0,0,0.58)] min-h-screen hidden ' id='modal' >
                <div className='w-[280px] min-h-full bg-white absolute top-10 right-0 rounded px-2'>

                    <span className='text-lg p-2 cursor-pointer close'>X</span>
                    <div className=''>
                        <h3 className='text-lg font-semibold py-1'>Domain</h3>
                        <input type="text" onChange={(e) => { setDomain(e.target.value) }} name="" id="" placeholder='Domain' className='px-3 outline-none border-solid border-blue-500 border-2 w-[250px] rounded-md' />
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold py-1'>Gender</h3>
                        <div>
                            <input type="checkbox" id="male" className='gender mx-1' name="gender" value="male" onChange={(e) => handleCheckbox('gender', setGender)} />
                            <label htmlFor="male">Male</label>
                        </div>

                        <div>
                            <input type="checkbox" name="gender" id="female" className='gender mx-1' value='female' onChange={(e) => handleCheckbox('gender', setGender)} />
                            <label htmlFor="female">Female</label>
                        </div>



                    </div>
                    <div>
                        <h3 className='text-lg font-semibold py-1'>Availabe</h3>
                        <div>
                            <input type="checkbox" id="true" name="Availabe" value='true' className='available mx-1' onChange={(e) => handleCheckbox('available', setAvailable)} />
                            <label htmlFor="true">True</label>
                        </div>

                        <div>
                            <input type="checkbox" name="Availabe" id="false" value='false' className='available mx-1' onChange={(e) => handleCheckbox('available', setAvailable)} />
                            <label htmlFor="false">False</label>
                        </div>



                    </div>

                </div>
            </section>
            <section className='flex flex-wrap justify-center items-stretch gap-2 my-3'>
                {displayMembers?.map((member, index) => <Member key={index} data={member}></Member>)}
            </section>
            <div className='pagination'>
                {
                    [...Array(pageCount).keys()].map((number, index) => <button key={index} className={`px-1 mx-1  rounded-md ${number == skip ? 'bg-black text-white' : 'bg-gray-200 text-black'}`} onClick={() => setSkip(number)}>{number}</button>)
                }

            </div>
        </div>
    );
};

export default Members;