import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Layout from '@/components/Layout';
import Dashboard from '@/pages/Dashboard';
import Admin from '@/pages/Admin';
import SchoolSetup from '@/pages/SchoolSetup';
import GradesStreams from '@/pages/GradesStreams';
import Students from '@/pages/Students';
import Subjects from '@/pages/Subjects';
import AddExams from '@/pages/AddExams';
import MarksEntry from '@/pages/MarksEntry';
import ResultsAnalysis from '@/pages/ResultsAnalysis';
import ReportCards from '@/pages/ReportCards';
import Fees from '@/pages/Fees';
import Settings from '@/pages/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="admin" element={<Admin />} />
          <Route path="school-setup" element={<SchoolSetup />} />
          <Route path="grades-streams" element={<GradesStreams />} />
          <Route path="students" element={<Students />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="add-exams" element={<AddExams />} />
          <Route path="marks-entry" element={<MarksEntry />} />
          <Route path="results-analysis" element={<ResultsAnalysis />} />
          <Route path="report-cards" element={<ReportCards />} />
          <Route path="fees" element={<Fees />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <Toaster position="top-right" expand={false} richColors />
    </BrowserRouter>
  );
};

export default App;
