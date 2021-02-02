import React from "react";
import axios from "axios";

export default function SearchEngine() {
    return(
        <div>
            <form>
                <input type="search" />
                <input type="submit" value="search" />
            </form>
        </div>
    )
}