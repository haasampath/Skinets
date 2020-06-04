using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Core.Specifications
{
    public interface ISpecification<T>
    {
        Expression<Func<T, bool>> Criteria {get; } // ex:like where clause product id = 1 
        List<Expression<Func<T, object>>> Includes {get; } // includes list of expression

        Expression<Func<T, object>> OrderBy {get; } // v 59
        Expression<Func<T, object>> OrderByDescending {get; } // v59
        int Take {get;}
        int Skip {get;}
        bool IsPaginEnabled  {get;}
    }
}