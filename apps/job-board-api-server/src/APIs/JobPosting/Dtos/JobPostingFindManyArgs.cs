using JobBoardApi.APIs.Common;
using JobBoardApi.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace JobBoardApi.APIs.Dtos;

[BindProperties(SupportsGet = true)]
public class JobPostingFindManyArgs : FindManyInput<JobPosting, JobPostingWhereInput> { }
