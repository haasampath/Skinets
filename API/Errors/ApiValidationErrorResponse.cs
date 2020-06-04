using System.Collections.Generic;

namespace API.Errors
{ // v 53
    public class ApiValidationErrorResponse : ApiResponse
    {
        public ApiValidationErrorResponse() : base(400)
        {

        }

public IEnumerable<string> Errors { get; set; }

    }
}