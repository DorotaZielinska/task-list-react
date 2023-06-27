import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Dorota Zielińska"
            body={
                <>
                    <p>
                        Aktualnie jestem w trakcie nauki programowania w internetowej szkole <a rel="noreferrer noopener"
                            target="_blank"
                            href="https://youcode.pl/zostawiam-maila/"
                            title="szkoła programowania frontend developer(otworzy się w nowym oknie)"
                        >YouCode</a>.
                    </p>
                    <p>
                        Każdy z modułów wnosi swoją <em>wartość w procesie nauki</em>.
                        Oczywiście wymaga to ciągłej praktyki, wytrwałośći i nie poddawania się,
                        a włożony wysiłek widać co efektem są wykonane aplikacje.
                    </p>
                    <p>
                        Dbam o swoje ciało, umysł i duszę, a sposobów aby to czynić jest wiele, mam swój <i>balance</i>.
                        To poranna gimnastyka, to rowerem po leśnych ścieżkach śmigam, to spacerkiem okolice zwiedzam,
                        to poczytam, to pomaluje, to pomajsterkuje i to tylko część z tego co kreuje.
                    </p>
                </>
            }
        />
    </Container>
);