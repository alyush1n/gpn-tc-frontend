import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MultipleCategory from "../Category/MultipleCategory";
import Category from "../Category/Category";
import ResultSource from "../ResultSource";
import Loader from "react-loader-spinner";
import ShowMoreCard from "../ShowMoreCard/ShowMoreCard";


const useStyles = makeStyles({
    searchInput: {
        fontSize: "12px",
        height: "48px",
        width: "416px",
        border: "none",
        backgroundColor: "white",
        borderRadius: "4px",
        paddingLeft: "16px",
        marginLeft: "16px",
        "&:focus": {
            outline: "none",
        },
    },
    button: {
        backgroundColor: "white",
        height: "48px",
        width: "48px",
        marginLeft: "16px",
    },
    searchIcon: {
        color: "#0079C2",
    },
    header: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    content: {
        paddingBottom: "20px",
        // width: "80%"
    }
});



const Header = (props) => {
    const classes = useStyles();
    const [name, setName] = useState("");
    return (
        <div className={classes.content}>
            <form className={classes.header} onSubmit={(e) => {
            }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 16,
                    }}
                >
                    <Category name="Тип"/>
                    <input
                        className={classes.searchInput}
                        type="text"
                        name="main-search"
                        placeholder="Поиск..."
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button
                        type="submit"
                        className={classes.button}
                        onClick={(e) => {
                            e.preventDefault();
                            props.searchByName(name, "");
                        }}
                    >
                        <SearchIcon className={classes.searchIcon}/>
                    </Button>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "48px",
                        marginTop: 16,
                    }}
                >
                    <MultipleCategory
                        name="Отрасль"
                        items={[
                            "Энергетика",
                            "Добыча полезных ископаемых",
                            "Строительство",
                            "Металлургия",
                            "Химическая и нефтехимическая промышленность",
                            "Машиностроение и металлообработка",
                            "Производство строительных материалов",
                        ]}
                    />
                    <MultipleCategory
                        name="Сфера"
                        items={[
                            "Геологоразведочные работы",
                            "Геология и разработка месторождений нефти и газа",
                            "Добыча нефти и газа",
                            "Нефтегазосервис (Upstream)",
                            "Транспорт и хранение нефти и газа (Midstream)",
                            "Энергоэффективность",
                            "Нефтегазопереработка",
                        ]}
                    />
                    <MultipleCategory
                        name="Технологии"
                        items={[
                            "Бурение скважин",
                            "Исследование скважин",
                            "Методы увеличения нефтеотдачи",
                            "Методы интенсификация добычи",
                            "Насосно-компрессорные трубы",
                            "Обсадные трубы",
                            "Жидкости ГРП",
                        ]}
                    />
                    <MultipleCategory name="Другое" items={[]}/>
                </div>
            </form>
            {props.load ? (
                <Loader
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                    type="default"
                    color="#0079C2"
                    height={100}
                    width={100}
                />
            ) : (
                <div>
                    <ResultSource/>
                </div>
            )}
        </div>
    );
};

export default Header;
