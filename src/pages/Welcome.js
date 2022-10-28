import { Routes, Route } from 'react-router-dom';

const Welcome = function () {
  return (
    <section>
      <h1>The Welcome Page</h1>
      {/* Nested routes in rereact-router-dom v-6 */}
      <Routes>
        <Route path="new-user" element={<p>Welcome, new user!</p>} />
      </Routes>
    </section>
  );
};

export default Welcome;
