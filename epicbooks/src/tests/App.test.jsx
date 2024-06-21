// tests per componente Welcome.test.jsx
import { fireEvent, queryAllByRole, render, screen } from '@testing-library/react';
import Welcome from '../src/components/Welcome';
import App from '../src/components/App';
import "@testing-library/jest-dom";
import { expect } from 'vitest';

test('renders Welcome component correctly', () => {
    render(<Welcome />);
    const welcomeElement = screen.getByText(/Epic Books/i);
    expect(welcomeElement).toBeInTheDocument();
});

//test render numero card esatto

test('verifico il render di tutte le card', async () => {
    render(<App />)

    const cards = await screen.findAllByTestId('card');

    expect(cards).toHaveLenght(150);
});

//test ricerca dei libri tramite navbar


test('ricerca dei libri tramite navbar', async () => {
    render(<App />);

    const searchBook = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchBook, { target: { value: 'witcher' } });

    const AllTheBooksCards = await screen.findAllByTestId('card');

    expect(AllTheBooksCards).toHaveLength(3);
});


//test verifica del componente Comment Area


test('verifica del componente Comment Area', () => {
    render(<App />);
    const btnDetail = screen.getAllByRole('button', { name: /Book Details/i })
    fireEvent.click(btnDetail[0])
    const commentArea = screen.getAllByPlaceholderText('Comment here...');
    expect(commentArea[0]).toBeInTheDocument()
});

//test verifica bordo che cliccando cambia colore
test('cliccando su un libro, il suo bordo cambia colore', async () => {
    render(<App />);
    const book = await screen.findByTestId('book-1');
    fireEvent.click(book);
    expect(book).toHaveStyle('border-pink-800');
});


//Verifica che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale

test('cliccando su un secondo libro dopo il primo, il bordo del primo libro ritorna normale', async () => {
    render(<App />);
    const firstBook = await screen.findByTestId('book-0'); // Assicurati di avere data-testid="book-0"
    const secondBook = await screen.findByTestId('book-1'); // Assicurati di avere data-testid="book-1"

    fireEvent.click(firstBook);
    expect(firstBook).toHaveStyle('border-pink-800');
    fireEvent.click(secondBook);
    expect(firstBook).not.toHaveStyle('border-pink-800');
    expect(secondBook).toHaveStyle('border-pink-800');
});



//Verifica che all'avvio della pagina, senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all'interno del DOM.

it('verifica istanze commenti' , ()=> {
    render(<App />);
    const AllTheBooksComment =query.getAllByTestId('single-comment');
    expect(AllTheBooksComments).toHaveLength(0);
})