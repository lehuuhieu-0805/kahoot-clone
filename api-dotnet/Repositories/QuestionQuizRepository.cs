using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.Serialization.Formatters;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using quiz_app_dotnet_api.Data;
using quiz_app_dotnet_api.Entities;
using X.PagedList;

namespace quiz_app_dotnet_api.Repositories
{
    public class QuestionQuizRepository : IQuestionQuizRepository<QuestionQuiz>
    {
        DataContext _context;

        public QuestionQuizRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<QuestionQuiz> CreateQuestion(QuestionQuiz question)
        {
            await _context.QuestionQuizs.AddAsync(question);
            await _context.SaveChangesAsync();
            return question;
        }

        public async Task<bool> DeleteQuestion(int id)
        {
            QuestionQuiz question = await _context.QuestionQuizs.FindAsync(id);
            if (question == null)
            {
                return false;
            }
            _context.QuestionQuizs.Remove(question);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<List<QuestionQuiz>> GetAll()
        {
            // return await _context.QuestionQuizs.ToListAsync();
            return await _context.QuestionQuizs.Include(q => q.course).ToListAsync();
        }

        public QuestionQuiz GetById(int id)
        {
            QuestionQuiz question = _context.QuestionQuizs.Include(q => q.course).FirstOrDefault(q => q.id == id);
            if (question == null)
            {
                return null;
            }
            return question;
        }

        public async Task<List<QuestionQuiz>> GetQuestionByIdCourse(int id)
        {
            List<QuestionQuiz> questions = await _context.QuestionQuizs.Include(q => q.course).Where(q => q.course.Id == id).ToListAsync();
            if (questions == null)
            {
                return null;
            }
            return questions;
        }

        public async Task<List<QuestionQuiz>> GetQuestionByIdCoursePaging(int id, int pageNumber = 1, int pageSize = 1)
        {
            return await _context.QuestionQuizs.OrderBy(q => q.course).Where(q => q.course.Id == id).ToPagedList(pageNumber, pageSize).ToListAsync();
        }

        public async Task<bool> UpdateQuestion(QuestionQuiz newQuestion)
        {
            var question = _context.QuestionQuizs.AsNoTracking().FirstOrDefault(x => x.id == newQuestion.id);
            if (question == null)
            {
                return false;
            }
            // _context.Entry(question).CurrentValues.SetValues(newQuestion);

            _context.QuestionQuizs.Update(newQuestion);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}