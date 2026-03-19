"use client";

import React, { ChangeEvent } from 'react'
import qs from "query-string";
import { useDebounce } from "@uidotdev/usehooks"
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group';
import { SearchIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

function SearchInput() {
    // get the pathname
    const path = usePathname();

    // Change url as search happens
    const router = useRouter();
    const [value, setValue] = React.useState<string>("");
    const debounceValue = useDebounce(value, 500);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    React.useEffect(() => {
        const url = qs.stringifyUrl({
            url: `/${path.split("/")[1]}`,
            query: {
                search: debounceValue
            }
        }, { skipEmptyString: true, skipNull: true });

        router.push(url);

    }, [debounceValue, router]);
    
    return (
        <div className='w-full relative lg:max-w-120'>
            <InputGroup>
                <InputGroupInput placeholder="Search boards..." onChange={onChangeHandler} value={value} />
                <InputGroupAddon>
                    <SearchIcon />
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

export default SearchInput