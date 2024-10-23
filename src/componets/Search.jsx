import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Button, FloatingLabel, ListGroup } from "flowbite-react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";


export default function Search({ handleChange }) {
    const [search, setSearch] = useState('Managua')
    const [showListGroup, setShowListGroup] = useState('hidden')
    const { data, loading } = useFetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${search}`)

    const handleChangeSearch = e => {
        if (e.target.value == "" || e.target.value == null) {
            setShowListGroup('hidden')
            return
        }

        setShowListGroup('block')
        setSearch(e.target.value)
    }


    return (
        <>
            <Sidebar aria-label="Default sidebar example" className="h-screen w-25">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <div className="relative">
                            <FloatingLabel variant="outlined" label="Ciudad" value={search} onChange={handleChangeSearch} />
                            <div className="flex justify-center">
                                <ListGroup className={showListGroup}>
                                    {
                                        loading == true
                                            ? <h2>Espere un momento</h2>
                                            : data.map(result =>
                                                <ListGroup.Item
                                                    onClick={
                                                        () => {
                                                            handleChange(`${result.lat},${result.lon}`)
                                                            setSearch('')
                                                            setShowListGroup('hidden')
                                                        }
                                                    }
                                                    key={result.id}
                                                >
                                                    {result.name}, {result.region}, {result.country}
                                                </ListGroup.Item>)
                                    }
                                </ListGroup>
                            </div>
                        </div>

                        <Sidebar.Item href="#" icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
                            Kanban
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiInbox} label="3">
                            Inbox
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiUser}>
                            Users
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiShoppingBag}>
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiTable}>
                            Sign Up
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </>
    )
}