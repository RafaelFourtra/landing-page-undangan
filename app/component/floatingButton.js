import React from "react";
import { Button } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";
import Styles from "./css/floatingButtonCss.module.css"

const FloatingButton = () => {
    return (
        <Button className={`${Styles.position} text-3xl`} isIconOnly color="danger" aria-label="Like">
            <FaWhatsapp />
        </Button>
    );
}

export default FloatingButton
