using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Command;

public class DeleteActivity
{
    public class Command : IRequest
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken token)
        {
            var activityToDel = await context.Activities.FindAsync([request.Id], token) ?? throw new Exception("Could not find activity");
            context.Activities.Remove(activityToDel);
            await context.SaveChangesAsync(token);}
    }
}
