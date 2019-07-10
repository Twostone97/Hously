import React, { useState, useEffect } from "react";

const DashboardAdmin = ({ apidata }) => {
    console.log("hello kitty");
    console.log("apidata", apidata);
    console.log("residenlist", apidata.users);

    const [isSmlouvaNaDobuUrcitou, setisSmlouvaNaDobuUrcitou] = useState(false);

    const changeInput = () => {
        setisSmlouvaNaDobuUrcitou(!isSmlouvaNaDobuUrcitou);
    };

    isSmlouvaNaDobuUrcitou && (
        <>
            <label for="end_of_current_rent">
                Konec aktuálního nájemního obdobý
            </label>
            <input type="date" name="end_of_current_rent" />
            <br />
        </>
    );

    return (
        <>
            <div className="page__main__dash__item dash__admin">
                <div className=" page__main__dash__item i__big">
                    <h4>Registrace obyvatel</h4>

                    <form
                        action="/resident"
                        method="post"
                        encType="multipart/form-data"
                    >
                        {/* <label for="user_id" /> */}
                        <select name="user_id">
                            {apidata.users.map(user => {
                                return (
                                    <option value={user.id}>
                                        {`${user.first_name}` +
                                            " " +
                                            `${user.last_name}`}
                                    </option>
                                );
                            })}
                        </select>
                        <br />

                        {/* <label flat_id /> */}
                        <select name="flat_id">
                            {apidata.flats.map(flat => {
                                return (
                                    <option value={flat.id}>
                                        {`patro: ` +
                                            `${flat.floor}` +
                                            ` číslo bytu: ` +
                                            `${flat.number}`}
                                    </option>
                                );
                            })}
                        </select>
                        <br />
                        <input
                            type="hidden"
                            name="building_id"
                            value={apidata.this_building.id}
                        />

                        <label>Začátek prvního nájemního období</label>
                        <input type="date" name="begining_of_first_rent" />
                        <br />

                        <label>Začátek aktuálního nájemního období</label>
                        <input type="date" name="begining_of_current_rent" />
                        <br />

                        <label>Smlouva</label>
                        <select name="contract_id" onChange={changeInput}>
                            {apidata.rentcontracts.map(contract => {
                                return (
                                    <option value={contract.id}>
                                        {`typ: ` + `${contract.name}`}
                                    </option>
                                );
                            })}
                        </select>
                        <br />

                        {isSmlouvaNaDobuUrcitou && (
                            <>
                                <label for="end_of_current_rent">
                                    Konec aktuálního nájemního obdobý
                                </label>
                                <input type="date" name="end_of_current_rent" />
                                <br />
                            </>
                        )}

                        {/* <label>Počet osob</label>
                        <input type="number" name="number_of_residents"><br> */}
                    </form>
                </div>

                <div className="page__main__dash__item i__big">
                    <h4>Information about house in work</h4>
                    <p>Some data about the house in work</p>
                </div>
                <div className="page__main__dash__item i__small">
                    <h4>Important files</h4>
                    <p>Here will be a list of files</p>
                </div>
            </div>
        </>
    );
};

export default DashboardAdmin;

{
    /* // <form action="/resident" method="post" enctype="multipart/form-data">   {{-- Formulář pro registraci obyvatele       Zpracovává ResidentController@store --}}
// @csrf
// <label for="user_id"></label>
// <select name="user_id">
//     @foreach ($users as $user)
//         <option value="{{$user->id}}">{{$user->first_name}} {{$user->last_name}}</option>       {{-- Výběr z uživatelů --}}
//     @endforeach
// </select><br>

// <label for="flat_id"></label>
// <select name="flat_id">
//     @foreach ($flats as $flat)
//     @if ($flat->residential == 1)
//     <option value="{{$flat->id}}">patro: {{$flat->floor}} byt: {{$flat->number}}</option>       {{-- Výběr z bytových jednotek --}}
//     @endif
//     @endforeach
// </select><br>

// <input type="hidden" name="building_id" value="{{$building}}">
// <label for="begining_of_first_rent">Začátek prvního nájemního obdobý</label>
// <input type="date" name="begining_of_first_rent"><br>

// <label for="begining_of_current_rent">Začátek aktuálního nájemního obdobý</label>
// <input type="date" name="begining_of_current_rent"><br>
// <label for="contract_id">Smlouva</label>
// <select name="contract_id">
//     @foreach ($rentcontracts as $contract)
//         <option value="{{$contract->id}}">{{$contract->name}}</option>
//     @endforeach
// </select><br>
// {{-- @if ($contract == 2) --}}  {{-- If bude v reaktu --}}
// <label for="end_of_current_rent">Konec aktuálního nájemního obdobý</label>
// <input type="date" name="end_of_current_rent"><br>
// {{-- @endif --}}








// <label for="number_of_residents">Počet osob</label>
// <input type="number" name="number_of_residents"><br>

// <label for="rental">Nájemné (kč)</label>
// <input type="number" name="rental"><br>

// <label for="file">Nájemní smlouva</label>
// <input type="file" name="file"><br>

// <input type="submit" value="Registrovat">
// </form> */
}
