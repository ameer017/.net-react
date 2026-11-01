using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList
{
    public class Query : IRequest<List<Activity>> { }

    public class Handler(AppDbContext context, ILogger<GetActivityList> logger) : IRequestHandler<Query, List<Activity>>
    {
        public Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            try
            {
                for(int i = 0; i < 10; i++)
                {
                    cancellationToken.ThrowIfCancellationRequested();
                    Task.Delay(1000, cancellationToken).Wait(cancellationToken);
                    logger.LogInformation($"Task {i} has completed!");
                }
            }
            catch (System.Exception)
            {
                logger.LogInformation("Task was cancelled!");
            }
            return context.Activities.ToListAsync(cancellationToken);
        }
    }
}
