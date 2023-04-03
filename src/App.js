import logo from './logo.svg';
import './App.css';
import {supabase} from '@supabase/supabase-js'
import { useState } from 'react';

// A React component that queries and displays data from Supabase
function Library() {
  // The useState hook lets us store data in a component across renders
  // setMyBooks is a setter function that updates the state of myBooks
  const [myBooks, setMyBooks] = useState([]);
  // This should look familar from Codepen
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    // Update the state
    setMyBooks(books);
  }
  // Execute the function
  getBooks();
  // Below is what displays when you use <Library />
  return (
    <table>
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
  )
}

const clubs = [
  {id: 1, name: 'Stealth 2', club_type: 'Driver', brand: 'Taylormade', user_rating: 'rated 8.7/10', majorityRecommended: true},
  {id: 2, name: 'Paradym', club_type: 'Driver', brand: 'Callaway', user_rating: 'rated 8.9/10', majorityRecommended: true}, 
  {id: 3, name: 'T100', club_type: 'Iron', brand: 'Titleist', user_rating: 'rated 9.4/10', majorityRecommended: true},
  {id: 4, name: 'Stix Clubs', club_type: 'Full Set', brand: 'Stix', user_rating: 'rated 6.2/10', majorityRecommended: false},
];

function ClubTable () {
  const listClubs = clubs.map(club =>
    <li
      key={club.id}
      style={{
        color: club.majorityRecommended ? 'green' : 'red'
      }}
    >
      {club.name}, 
      {club.brand}, 
      {club.user_rating}, 
      {club.club_type}  
      
    </li>
    );
    return (
      <ul>{listClubs}</ul>
    ) 
}

function GolfHeader() {
  return (
    <>
      <h2>Golf Equipment Database</h2>
    </>
  )
}

function GolfDescription () {
  return (
    <h3>Latest inforomation on the game's hottest equipment</h3>
  )
}

function GolfContact () {
  return (
    <p>To reach us, email us at golfinfo@email.com</p>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <GolfHeader/>
        <GolfDescription/>
        <ClubTable/>
      </header>
      <GolfContact/>
    </div>
  );
}

export default App;
